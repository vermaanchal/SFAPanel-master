import { baseURLProd } from 'api/api';
import { set } from 'lodash';
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
const AgentRequestHook = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [currentView, setCurrentView] = useState('default');
    const [openPreview, setOpenPreview] = useState(false);
    const [previewImageUrl, setPreviewImageUrl] = useState('');
    const [status, setStatus] = useState('');
    const [showApproveButton, setShowApproveButton] = useState(true);
    const [showRejectButton, setShowRejectButton] = useState(true);
    const [loading, setLoading] = useState(false);
    const [audioprice, setAudioPrice] = useState("")
    const [videoprice, setVideoPrice] = useState("")
    const [adminCommision, setAdmincommision] = useState("")
    const fetchData = async () => {
        setLoading(true)
        try {
            let req = await fetch(`https://streamadmin-uatapi.sfalive.co.uk/api/Registration/GetAllAgentUsersPending`, {
                method: "GET",
                'Content-Type': 'application/json',

            })
            const res = await req.json();
            setLoading(false)
            setData(res.agentUserList || []);
            setFilter(res.agentUserList || [])

        }
        catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const result = data.filter((item) => {
            return item.userId.toLowerCase().match(search.toLocaleLowerCase())
        })
        setFilter(result)
    }, [search])

    //   const handleApprove = async (adminId) => {
    //     try {
    //       if (window.confirm("Are you sure to approve the request?")) {
    //         await fetch(`${baseURLProd}AdminRequestApprove`, {
    //           method: 'POST',
    //           body: JSON.stringify({ adminId: adminId }),
    //           headers: {
    //             'Content-Type': 'application/json'
    //           }
    //         });
    //         const rowIndex = data.findIndex(item => item.adminid === adminId);
    //         if (rowIndex !== -1) {
    //           const updatedData = [...data];
    //           updatedData[rowIndex].status = 'Approved';
    //           toast.success("Request Approved successfully");
    //           setSearch('')
    //           setData(updatedData);
    //           setFilter(updatedData);
    //           fetchData();
    //         }
    //       }
    //     } catch (error) {
    //       console.error('Error approving request:', error);
    //     }
    //   };


    const navigate = useNavigate();

    const handleApprove = (row) => {
        navigate("/ApproveAgentRequest", { state: { selectedRow: row } });
    }

    const handleReject = async (userId) => {
        try {
          if (window.confirm("Are you sure to Reject the Request ?")) {
            const response = await fetch(`https://streamadmin-uatapi.sfalive.co.uk/api/Registration/RejectAgentUser`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userId: userId,
                isApproved: false,
              }),
            });
            const res = await response.json()
            if (response.ok) {
              toast.success(res.message);
              fetchData(); // Refresh the list
            } else {
              toast.error("Failed to reject request");
            }
          }
        } catch (error) {
          console.error('Error rejecting request:', error);
          toast.error("An error occurred while rejecting the request");
        }
      };
      

    //----------------------image download-------------------//
    const handleDownload = (imageUrl, imageName) => {
        fetch(imageUrl, {
            mode: 'cors',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(blob => {
                const link = document.createElement('a');
                const objectURL = URL.createObjectURL(blob);
                link.href = objectURL;
                link.download = imageName;
                link.click();
                URL.revokeObjectURL(objectURL);
            })
            .catch(error => console.error('Error downloading image:', error));
    };

    const handleApproveChange = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://streamadmin-uatapi.sfalive.co.uk/api/Registration/Get_ApprovedAgentUserList`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({})
            });
            const data = await response.json();
            setFilteredData(data.agentList || []);
            setCurrentView('approved');
        } catch (error) {
            console.error('Error fetching approved data:', error);
        }
        finally {
            setLoading(false)
        }
    };

    const handleRejectChange = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://streamadmin-uatapi.sfalive.co.uk/api/Registration/Get_RejectedAgentUserList`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}) 
            });
            const data = await response.json();
            setFilteredData(data.agentList || []);
            setCurrentView('rejected');
        } catch (error) {
            console.error('Error fetching rejected data:', error);
        }
        finally {
            setLoading(false)
        }
    };

    const handleSubmit = () => {
        if (status) {
            const filtered = data.filter(item => item.status === status);
            setFilter(filtered);

            if (status === 'Approved') {
                setShowRejectButton(false);
            } else if (status === 'Rejected') {
                setShowApproveButton(false);
            }
        } else {
            setFilter(data);
            setShowApproveButton(true);
            setShowRejectButton(true);
        }
    };
    const handleReset = () => {
        setSearch('');
        setStatus("")
        setFilter(data);
    };
    //-------------------image preview---------------//
    const handleImageClick = (imageUrl) => {
        setPreviewImageUrl(imageUrl);
        setOpenPreview(true);
    };

    const handleClosePreview = () => {
        setOpenPreview(false);
    };

    const downloadCSV = () => {
        // Format the data for CSV
        const csvContent =
            "data:text/csv;charset=utf-8," +
            [
                Object.keys(filter[0]).join(','), // Header row
                ...filter.map((row) => Object.values(row).join(',')), // Data rows
            ].join('\n');

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "Admin_request.csv");
        document.body.appendChild(link);
        link.click();
    };
      

    return {
        filter, search, setSearch, openPreview, setOpenPreview, previewImageUrl, setPreviewImageUrl,
        handleClosePreview, handleDownload, handleImageClick, handleApprove,
        handleReject, downloadCSV, data, handleReset, handleApproveChange, handleRejectChange, handleSubmit, status,
        showApproveButton, showRejectButton, loading, filteredData, currentView, setCurrentView,
        audioprice, videoprice, adminCommision,
        setAudioPrice, setVideoPrice, setAdmincommision
    }
}

export default AgentRequestHook


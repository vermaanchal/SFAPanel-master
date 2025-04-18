import { baseURLProd } from "api/api"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const AssignRoleHook = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState([])
    const [roleId, setRoleId] = useState([])
    const [userValue, setUserValue] = useState("")
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        setLoading(true)
        try {
            let req = await fetch(`${baseURLProd}GetAssignedRoleDetails`, {
                method: "GET",
                'Content-Type': 'application/json',
            })
            const res = await req.json()
            setLoading(false)
            setData(res.getAssignedRoleList)
            setFilter(res.getAssignedRoleList)
        }
        catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        const result = data.filter((item) => {
            return item.userId.toLowerCase().match(search.toLocaleLowerCase())
        })
        setFilter(result)
    }, [search])

    //-------------select value--------------------
    const handleSelectChange = (e) => {
        setRoleId(e.target.value)
    };

    //---------------Assign Role-------------//
    const handleAssignRole = async () => {

        try {
            const req = await fetch(`${baseURLProd}AssignRoles`, {
                method: 'POST',
                body: JSON.stringify({
                    roleId: roleId,
                    userId: userValue
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const res = await req.json()
            if (res.status == false) {
                toast.error(res.message)
            }
            else {
                toast.success("Role assigned Successfully")
                setUserValue("")
                setRoleId("")
                fetchData()
            }
        }
        catch (error) {
            console.error('error', error);
        }
    }
    const handleRemove = async (userId) => {
        if (window.confirm("Are you sure to Remove the Data?")) {
            await fetch(`${baseURLProd}RemoveUserRoles`, {
                method: "POST",
                body: JSON.stringify({ userId: userId }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const newData = data.filter(row => !(row.userid === userId));
            setFilter(newData);
            fetchData();
            setSearch("")
            toast.success("Role Removed successfully")
        }
    }
    const handleReset = () => {
        setSearch('');
        setFilter(data);
    };
    return {
        roleId, handleSelectChange, search, setSearch, filter, setUserValue, userValue
        , handleAssignRole, handleRemove, handleReset, data
    }
}

export default AssignRoleHook

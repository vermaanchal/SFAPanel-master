
import { baseURLProd } from 'api/api';
import { useEffect, useState } from 'react'

const FeedbackReportHook = () => {
  const [data, setData] = useState([]);
  const [openPreview, setOpenPreview] = useState(false);
  const [previewImageUrl, setPreviewImageUrl] = useState('');
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    try {
      const req = await fetch(`${baseURLProd}GetReport_Feedback_Details`, {
        method: "GET",
        'Content-type': "application/json"
      })
      const res = await req.json()
      setLoading(false)
      setData(res.reportFeedbackList)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

  }
  useEffect(() => {
    fetchData()
  }, [])
  const handleImageClick = (imageUrl) => {
    setPreviewImageUrl(imageUrl);
    setOpenPreview(true);
  };
  const handleClosePreview = () => {
    setOpenPreview(false);
  };
  return {
    data, openPreview, previewImageUrl, handleClosePreview, handleImageClick,loading
  }
}

export default FeedbackReportHook

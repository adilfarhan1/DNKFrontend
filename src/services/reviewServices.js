import axiosPrivate from "../url/axios";

export const userReviewServices = () => {
    const postReview = async (formdata) => {
        const response = await axiosPrivate.post('/review/add-review', formdata, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        return response.data
    }

    const getReview = async () => {
        const response = await axiosPrivate.get('/review/get-review')
        return response.data
    };

    const putReview = async (id, data) => {
        const response = await axiosPrivate.put('/review/updatereview/' + id, data, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        return response.data
    }

    const deleteReview = async (id) => {
        const response = await axiosPrivate.delete('/review/delete-review/' + id)
        return response.data
    }


    return {
        postReview,
        getReview,
        putReview,
        deleteReview
    }




}
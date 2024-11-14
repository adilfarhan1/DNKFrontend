import axiosPrivate from "../url/axios";

export const userPartnerServices = () => {
    const postPartner = async (formdata) => {
        const response = await axiosPrivate.post('/partner/add-partner', formdata, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        return response.data
    }

    const getPartner = async () => {
        const response = await axiosPrivate.get('/partner/get-partner')
        return response.data
    };

    const getPartnerName = async (partnerName) => {
        const response = await axiosPrivate.get(`/partner/get-partner-name/${encodeURIComponent(partnerName)}`)
        return response.data
    };

    const putPartner = async (id, data) => {
        const response = await axiosPrivate.put('/partner/updatepartner/' + id, data, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        return response.data
    }

    const deletePartner = async (id) => {
        const response = await axiosPrivate.delete('/partner/delete-partner/' + id)
        return response.data
    }

    return {
        postPartner,
        getPartner,
        putPartner,
        deletePartner,
        getPartnerName
    }

}
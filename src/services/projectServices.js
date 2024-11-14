import axiosPrivate from "../url/axios";

export const useProjectServices = () => {

    const postProjectList = async (formdata) => {
        const response = await axiosPrivate.post('/task/add-task', formdata, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        return response.data
    }
    const putProjectList = async (id, data) => {
        const response = await axiosPrivate.put('/task/updatetask/' + id, data, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        return response.data
    }
    const getProjectList = async () => {
        const response = await axiosPrivate.get('/task/get-task')
        return response.data
    }
    const getProjectPublicList = async () => {
        const response = await axiosPrivate.get('/task/get-task-public')
        return response.data
    }
    const getProjectById = async (projectname) => {
        const response = await axiosPrivate.get('/task/project/' + projectname)
        return response.data
    }
    const deleteProjectList = async (id, data) => {
        const response = await axiosPrivate.delete('/task/delete-task/' + id)
        return response.data
    }
    const postAdImage = async (formdata) => {
        const response = await axiosPrivate.post('/task/add-ad', formdata, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        return response.data
    }
    const getAd = async () => {
        const response = await axiosPrivate.get('/task/get-ad')
        return response.data
    }
    const putAd = async (id, data) => {
        try {
            const response = await axiosPrivate.put('/task/update-ad/' + id, data, {
                headers: { "Content-Type": 'multipart/form-data' }
            })
            return response.data
        } catch (err) {
            console.error("Error in putAd:", err);
            throw err;
        }

    }

    const postHomeBannerImage = async (formdata) => {
        const response = await axiosPrivate.post('/task/add-home-banner', formdata, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        return response.data
    }
    const getHomeBanner = async () => {
        const response = await axiosPrivate.get('/task/get-home-banner')
        return response.data
    }
    const putHomeBanner = async (id, data) => {
        try {
            const response = await axiosPrivate.put('/task/update-home-banner/' + id, data, {
                headers: { "Content-Type": 'multipart/form-data' }
            })
            return response.data
        } catch (err) {
            console.error("Error in putHomeBanner:", err);
            throw err;
        }

    }

    const postEvent = async (formdata) => {
        const response = await axiosPrivate.post('/task/add-event', formdata, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        return response.data
    }
    const getEvent = async () => {
        const response = await axiosPrivate.get('/task/get-event')
        return response.data
    }
    const putEvent = async (id, data) => {
        try {
            const response = await axiosPrivate.put('/task/update-event/' + id, data, {
                headers: { "Content-Type": 'multipart/form-data' }
            })
            return response.data
        } catch (err) {
            console.error("Error in putHomeBanner:", err);
            throw err;
        }
    }

    const deleteEvent = async (id, data) => {
        const response = await axiosPrivate.delete('/task/delete-event')
        return response.data
    }

    const postLogo = async (formdata) => {
        const response = await axiosPrivate.post('/task/add-logo', formdata, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        return response.data
    }
    const getLogo = async () => {
        const response = await axiosPrivate.get('/task/get-logo')
        return response.data
    }
    const putLogo = async (id, data) => {
        try {
            const response = await axiosPrivate.put('/task/update-logo/' + id, data, {
                headers: { "Content-Type": 'multipart/form-data' }
            })
            return response.data
        } catch (err) {
            throw err;
        }
    }

    const deleteLogo = async (id, data) => {
        const response = await axiosPrivate.delete('/task/delete-logo')
        return response.data
    }


    return {
        postProjectList,
        putProjectList,
        getProjectList,
        getProjectPublicList,
        deleteProjectList,
        getProjectById,
        postAdImage,
        getAd,
        putAd,
        postHomeBannerImage,
        getHomeBanner,
        putHomeBanner,
        postEvent,
        getEvent,
        putEvent,
        deleteEvent,
        postLogo,
        putLogo,
        getLogo,
        deleteLogo
    }
}
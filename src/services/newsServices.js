import axiosPrivate from "../url/axios";

export const userNewsServices = () => {
    const postNews = async (formdata) => {
        const response = await axiosPrivate.post('/news/add-news', formdata, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        return response.data
    }

    const getNews = async () => {
        const response = await axiosPrivate.get('/news/get-news')
        return response.data
    };

    const getNewsById = async (newsurl) => {
        const response = await axiosPrivate.get('/news/newspage/' + newsurl)
        return response.data
    }

    const putNews = async (id, data) => {
        const response = await axiosPrivate.put('/news/updatenews/' + id, data, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        return response.data
    }

    const deleteNews = async (id) => {
        const response = await axiosPrivate.delete('/news/delete-news/' + id)
        return response.data
    }

    return {
        postNews,
        getNews,
        getNewsById,
        putNews,
        deleteNews,
    }
}
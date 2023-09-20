import { IAddPost } from "./interfaces";

const base64UrlDecode = (base64Url: string) => {
    const padding = '='.repeat((4 - (base64Url.length % 4)) % 4);
    const base64 = (base64Url + padding).replace(/-/g, '+').replace(/_/g, '/');
    const decoded = atob(base64);
    return Array.from(decoded).map((char) => char.charCodeAt(0));
};

export const decodeJwt = (jwtToken: string) => {
    const [headerBase64Url, payloadBase64Url, signatureBase64Url] = jwtToken.split('.');
    const header = JSON.parse(String.fromCharCode(...base64UrlDecode(headerBase64Url)));
    const payload = JSON.parse(String.fromCharCode(...base64UrlDecode(payloadBase64Url)));
    return { header, payload };
};

export const expToMinutes = (expTimestampInSeconds: number) => {
    const expTimestampInMillis = expTimestampInSeconds * 1000;
    const currentTimeInMillis = Date.now();
    const timeDifferenceInMillis = expTimestampInMillis - currentTimeInMillis;
    const timeDifferenceInMinutes = timeDifferenceInMillis / 60000;
    return timeDifferenceInMinutes;
};

export const updateAccessToken = () => {
    try {
        let refresh = localStorage.getItem('refresh');
        fetch(
            "https://studapi.teachmeskills.by/auth/jwt/refresh/",
            {
                method: "POST",
                body: JSON.stringify({ refresh }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        .then((data) => data.json())
        .then(({access}) => {
            if (access) {
                console.log(access);
                localStorage.setItem("access", access);
                console.log('Access token has been updated');
            }
        });
    } catch (err) {
        console.log(err);
    }
};

export const addPost = (payload: IAddPost) => {

    const formData = new FormData();
    formData.append('image', payload.image);
    formData.append('text', payload.text);
    formData.append('lesson_num', payload.lesson_num.toString());
    formData.append('title', payload.title);
    formData.append('description', payload.description);
    console.log(formData);

    try {
        let token = localStorage.getItem("access");
        console.log(payload.image);
        console.log(typeof payload.lesson_num);
        // image=@2.jpg;type=image/jpeg
        fetch(
            "https://studapi.teachmeskills.by/blog/posts/",
            {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "accept": "application/json",
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                },
            }
        )
        .then((data) => {
            console.log(data);
            return data.json();
        })
        // .then(({id}) => {
        //     if (id) {
        //         console.log(access);
        //         localStorage.setItem("access", access);
        //         console.log('Access token has been updated');
        //     }
        // });
    } catch (err) {
        console.log(err);
    }
};
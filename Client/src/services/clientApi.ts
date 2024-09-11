import axios from '../utils/axios-customize';

export const callRegister = (email: string, password: string, fullName: string)=> {
    return axios.post('/api/v1/auth/sign-up', {email, password, fullName});
}

export const callLogin = (email: string, password: string) => {
    return axios.post('/api/v1/auth/sign-in', {email, password})
}

export const callProfile = () => {
    return axios.get('/api/v1/client/user/profile')
}

export const callLogout = () => {
    return axios.get('/api/v1/client/user/logout')
}

export const callForgotPassword = (params: string) => {
    return axios.get(`/api/v1/auth/forgot-password?email=${params}`)
}

export const callResetPassword = (token: string, password: string) => {
    return axios.post('/api/v1/auth/reset-password', { token, password });
};

export const callResendVerifyEmail = (params: string) => {
    return axios.get(`/api/v1/auth/resend-verification-email?email=${params}`);
};

export const callVerifyEmail = (token: string) => {
    return axios.get(`/api/v1/auth/verify-email?token=${token}`);
};

export const callRefreshToken = () => {
    return axios.get('/api/v1/auth/refresh-token');
}

export const callUpdateProfile = (fullName: string, email: string) => {
    return axios.put('/api/v1/client/user/update', {fullName, email});
}

export const callUpdateAvatar = (file: FormData) => {
    return axios.put('/api/v1/client/user/update-avatar', file, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

//phân trang address
export const callBulkAddress = (userId: string, pageNo: number, pageSize: number) => {
    return axios.get(`/api/v1/client/address/get-all-address?userId=${userId}&pageNo=${pageNo}&pageSize=${pageSize}`);
}

export const callAddAddress = (street: string, country: string, city: string, postalCode: string, addressType: string, state: string, phoneNumber: string, email: string, userId: string) => {
    return axios.post('/api/v1/client/address/add', { street, country, city, postalCode, addressType, state, phoneNumber, email, userId });
}

// export const callUpdateAddress = (street: string, country: string, city: string, postalCode: string, addressType: string, state: string, phoneNumber: string, email: string) => {
//     return axios.put('/api/v1/client/user/update', {street, country, city, postalCode, addressType, state, phoneNumber, email});
// }
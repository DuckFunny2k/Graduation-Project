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

// export const callGoogleLogin = () => {
//     return axios.get('/api/v1/oauth2/google/callback');
// }
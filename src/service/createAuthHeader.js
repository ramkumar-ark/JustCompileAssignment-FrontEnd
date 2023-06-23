export default function getHeader() {
    const token = localStorage.getItem("token");
    const header = {
        'Authorization': `Bearer ${token}`
    };
    return header;
};

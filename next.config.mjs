/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source: '/user',    // choose Redirection page
                destination: '/',  // Home Page
                permanent: false,
            }
        ]
    }
};

export default nextConfig;

import { useEffect, useState } from "react"

export const useUserLogin = () => {
    const userKey = 'USER_LOGIN'
    const [user, updateUser] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const userRaw = await localStorage.getItem(userKey);
                const user = JSON.parse(userRaw);
                updateUser(user);
            } catch (error) {
                console.log("🚀 ~ file: userHook.js ~ line 14 ~ error", error)
            }
        })();
    }, [])

    return [user, updateUser]
}
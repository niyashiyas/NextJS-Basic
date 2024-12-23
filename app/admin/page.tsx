'use client'
import React, { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function Page() {
    const { user } = useAuthContext();
    console.log(user)
    const router = useRouter();

    useEffect(() => {
        if (user == null) router.push("/");
    }, [user]);
        router.push("/tasks")
    // return (<h1>Only logged in users can view this page</h1>);
}

export default Page;
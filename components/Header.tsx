"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth, UserButton, SignInButton } from "@clerk/nextjs";


export function ButtonWithIcon() {
    const { isSignedIn } = useAuth();


    return (
        <div>
            {!isSignedIn && (<SignInButton mode="modal">
                <Button>
                    <Mail className="mr-2 h-4 w-4" /> Login with Email
                </Button>
            </SignInButton>)}
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}


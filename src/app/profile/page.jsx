"use client";
import { ModalCard } from "@/components/Modal/Modal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  // console.log(user);
  return (
    <Card className="flex justify-center items-center my-6">
      <div>
        <Avatar>
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrel"
          />
          
        </Avatar>
      </div>
        <p className="text-2xl font-bold">{user?.name}</p>
        <p>{user?.email}</p>

        <ModalCard></ModalCard>
    </Card>
  );
};

export default ProfilePage;

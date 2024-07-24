"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Testimonial } from "@/components/Testimonial";
import Image from "next/image";
import GlobalApi from "@/service/GlobalApi";
import { Link2Icon, Newspaper, DeleteIcon } from "lucide-react";
import { TestimonialUpdate } from "@/components/TestimonialUpdate";

import Link from "next/link";
const Dashboard = () => {
  const [spaceOpen, setSpaceOpen] = useState(false);
  const [mySpaces, setMySpaces] = useState([]);
  const [updateSpace, setUpdateSpace] = useState([]);

  const fetchSpaces = async () => {
    try {
      const data = await GlobalApi.getSpace();
      setMySpaces(data.data);
    } catch (error) {
      console.error("Error fetching Spaces:", error);
    }
  };

  async function deleteSpace(id) {
    console.log(id);
    try {
      await GlobalApi.deleteSpace(id);
      console.log("Deleted Space with ID:", id);
      fetchSpaces();
    } catch (error) {
      console.error("Error deleting space:", error);
    }
  }

  async function update(data) {}
  useEffect(() => {
    fetchSpaces();
  }, []);

  return (
    <>
      {spaceOpen ? (
        <div>
          <Testimonial
            onClose={() => setSpaceOpen(false)}
            fetchSpaces={fetchSpaces}
          />
        </div>
      ) : (
        <React.Fragment>
          <div className="min-h-screen w-full bg-[#151719] flex flex-col items-center">
            <div className="flex gap-[400px] p-12">
              <h1 className="text-3xl font-bold text-white">Spaces</h1>
              <Button variant="outline" onClick={() => setSpaceOpen(true)}>
                Add new space
              </Button>
            </div>
            {mySpaces && mySpaces.length > 0 ? (
              mySpaces.map((space) => (
                <Link href={`/testimonial/${space._id}`} key={space._id}>
                  <div
                    className="flex justify-between p-4 w-[650px] rounded-md mt-4 bg-slate-300 hover:bg-slate-400 font-bold"
                    key={space._id}
                  >
                    <h1>{space.spaceName}</h1>
                    <div className="flex gap-2">
                      <a>
                        <Link2Icon />
                      </a>
                      <DeleteIcon onClick={() => deleteSpace(space._id)} />

                      <Link href={`/dashboard/${space._id}/edit`}>
                        <Newspaper />
                      </Link>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <>
                <Image
                  src="/dashboard.svg" // Ensure the correct path to the image
                  height={450}
                  width={450}
                  alt="Dashboard_SVG"
                />
                <p className="mt-2 text-white">No space created yet</p>
              </>
            )}
          </div>
        </React.Fragment>
      )}
    </>
  );
};

export default Dashboard;

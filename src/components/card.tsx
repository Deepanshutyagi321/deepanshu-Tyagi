import * as React from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"


export function SkillCard({ data }: any) {
  return (
    <Card className=" bg-white w-[200px] h-[200px] p-2 flex flex-col items-center justify-center justify-between hover:animate-spin">
      <Image
        src={data.image}
        alt={`Photo by ${data.author}`}
        className="aspect-[6/7] object-contain"
        width={150}
        height={100}
      />

    </Card>
  );
}

export function ProjectCard({ data }: any) {
  return (
    <Card className="w-[350px] h-auto bg-gray-700 ">
      <CardHeader >
        <CardTitle className="text-white mb-2">{data.title}</CardTitle>
        <CardDescription className="text-white text-lg font-medium ">{data.description}
          <h2 className="text-xl text-bold "> Tech stack:</h2>
          <p>{data.technologies}</p>

        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-center space-x-5 ">
        <Button className="bg-inherit text-white text-lg w-35 hover:opacity-70 rounded-3xl border-2 " onClick={() => window.open(data.github)}>Code</Button>
        <p className="text-white  text-lg">|</p>
        <Button className="bg-inherit text-white text-lg w-35  hover:opacity-70 rounded-3xl border-2 " onClick={() => window.open(data.url)}>Visit</Button>
      </CardFooter>
    </Card>
  )
}


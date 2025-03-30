'use client'
import { ProgressBar } from "@/components/ProgressBar";
import { useState } from "react";
import SkillCard from "@/components/SkillCard";
import SubjectProgressBars from "@/components/SubjectProgressBars";
import { ProgressCircle } from "@/components/ProgressCircle";
import Image from "next/image";

export default function SkillTest() {


  const [skillData, setSkillData] = useState({
    rank: 1,
    numCorrect: 12,
    percentile: 90,
    // ... other initial values
  })

  const handleSkillUpdate = (updatedData: {
    rank: number
    numCorrect: number
    percentile: number
  }) => {
    setSkillData(prev => ({
      ...prev,
      ...updatedData
    }))
  }


    return (
      <div className="w-[100%]">
        Skill Test
        <div className="lg:flex">
        <SkillCard 
        name="Hyper Text Markup Language"
        logo="/htmlLogo.png"
        duration="30 mins"
        submittedOn="March 30, 2024"
        rank={8}
        numCorrect={12}
        totalQuestions={15}
        percentile={80}
        average={72}
        onUpdate={handleSkillUpdate}
      />

      <div className="">
        <SubjectProgressBars />
        <div className="justify-center flex flex-col shadow-sm border border-gray-200 p-6 mt-6 rounded-xl">
          <h3 className="font-bold">Question Analysis</h3>
          <p><span className="font-bold">You scored {skillData.numCorrect} correct out of 15.</span> {skillData.numCorrect === 15 ? "You have aced it" : "However it still needs improvement"}</p>

          <ProgressCircle className="place-self-center mt-6" value = {(skillData.numCorrect / 15) * 100} radius={60} strokeWidth={10}>
            <Image src="/bullseye.png" alt="Bullseye" width ={70} height={70} className="pb-2 pl-2"/> 
        </ProgressCircle>
        </div>
      </div>
      </div>
      </div>
    );
  }
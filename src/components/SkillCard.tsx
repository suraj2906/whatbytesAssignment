'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Line, LineChart, Tooltip, XAxis, ReferenceLine, ResponsiveContainer} from 'recharts'

interface SkillCardProps {
  name: string
  logo: string
  duration: string
  submittedOn: string
  rank: number
  numCorrect: number
  totalQuestions: number
  percentile: number
  average: number
  onUpdate?: (updatedData: {
    rank: number
    numCorrect: number
    percentile: number
  }) => void
}

const percentileDistributionData = [
  {
    percentile: "0",
    students: 4
  },
  {
    percentile: "10",
    students: 6
  },
  {
    percentile: "20",
    students: 15
  },
  {
    percentile: "30",
    students: 25
  },
  {
    percentile: "40",
    students: 36
  },
  {
    percentile: "50",
    students: 50
  },
  {
    percentile: "60",
    students: 25
  },
  {
    percentile: "70",
    students: 18
  },
  {
    percentile: "80",
    students: 15
  },
  {
    percentile: "90",
    students: 10
  },
  {
    percentile: "100",
    students: 5
  }
]





const SkillCard = ({ 
  name, 
  logo, 
  duration, 
  submittedOn, 
  rank: initialRank, 
  numCorrect: initialNumCorrect,
  totalQuestions, 
  percentile: initialPercentile,
  average,
  onUpdate
}: SkillCardProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [rank, setRank] = useState(initialRank)
  const [numCorrect, setNumCorrect] = useState(initialNumCorrect)
  const [percentile, setPercentile] = useState(initialPercentile)
  const [editData, setEditData] = useState({
    rank: initialRank,
    numCorrect: initialNumCorrect,
    percentile: initialPercentile
  })

  const handleUpdate = () => {
    if (isEditing) {
      // Update local state
      setRank(editData.rank)
      setNumCorrect(editData.numCorrect)
      setPercentile(editData.percentile)
      
      // Propagate changes to parent
      if (onUpdate) {
        onUpdate({
          rank: editData.rank,
          numCorrect: editData.numCorrect,
          percentile: editData.percentile
        })
      }
      
      // Here you would typically make an API call to update the data
      console.log('Updated data:', editData)
    }
    setIsEditing(!isEditing)
  }

  return (
    <div className="bg-white rounded-lg p-6 w-[40%}">
      <div className="flex items-center justify-between shadow-sm border border-gray-200 p-6 rounded-xl">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center">
            <img 
              src={logo} 
              alt={name} 
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h2 className="text-l font-semibold">{name}</h2>
            <div className="text-sm text-gray-500 space-y-1 p-2">
              <p>Questions: 08 | Duration: {duration} | Submitted on: {submittedOn}</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleUpdate}
          className="px-6 py-2 bg-blue-900 font-bold text-white rounded-lg hover:bg-blue-700 transition-colors text-[12px]"
        >
          {isEditing ? 'Save' : 'Update'}
        </button>
      </div>

      <div className='shadow-sm border border-gray-200 my-3 p-5 rounded-xl'>
      <h2 className="text-l font-semibold">Quick Statistics</h2>
        <div className="mt-8 grid grid-cols-3">
        
            <div className="p-4 flex justify-center">
            <Image src="/Trophy.png" width={50} height={10} alt="Trophy" />

            <div className='px-2'>
            {isEditing ? (
                <input
                type="number"
                value={editData.rank}
                onChange={(e) => setEditData({...editData, rank: Number(e.target.value)})}
                className="w-full p-2 border rounded"
                />
            ) : (
                <p className="text-xl font-bold">{rank}</p>
            )}
            <p className="text-sm text-gray-500 mb-1">Rank</p>
            </div>
            </div>

            <div className= "p-4 border-l border-gray-200 flex justify-center">
            <Image src="/spiral-notepad.png" width={50} height={10} alt="Trophy" />
            <div className='px-2'>    
            {isEditing ? (
                <input
                type="number"
                value={editData.percentile}
                onChange={(e) => setEditData({...editData, percentile: Number(e.target.value)})}
                className="w-full p-2 border rounded"
                max="100"
                />
            ) : (
                <p className="text-xl font-bold">{percentile}%</p>
            )}
            <p className="text-sm text-gray-500 mb-1">Percentile</p>
            </div>
            </div>

            <div className="p-4 border-l border-gray-200 flex justify-center">
            <Image src="/check-mark-button.png" width={50} height={1} alt="Trophy" />
            <div className='px-2'>
            {isEditing ? (
                <input
                type="number"
                value={editData.numCorrect}
                onChange={(e) => setEditData({...editData, numCorrect: Number(e.target.value)})}
                className="w-full p-2 border rounded"
                max="100"
                />
            ) : (
                <p className="text-xl font-bold">{numCorrect} / {totalQuestions}</p>
            )}
            <p className="text-sm text-gray-500 mb-1">CORRECT ANSWERS</p>
            </div>
            </div>
        </div>
        </div>


    <div className='shadow-sm border border-gray-200 my-3 p-5 rounded-xl'>
      <h2 className="text-l font-semibold">Comparison Graph</h2>
        <div className="mt-8">
        
            <div className="flex justify-center">
            <div className=''>
            <span className='font-bold'>You scored {percentile}% percentile</span> which is {(percentile > average) ? <span>higher than</span> : (percentile === average) ? <span>equal to</span> : <span>lower than</span>} the average percentile {average}% of all the engineers who took this assessment. 
            </div>
            <Image src="/graph.png" width={50} height={10} alt="Trophy" />

            </div>
            <ResponsiveContainer width="100%" height={400}>
            <LineChart 
              
              data={percentileDistributionData}
            >
              <Line type="monotone" dataKey="students" stroke='#8884d8' />
              <XAxis dataKey='percentile' />
              <ReferenceLine
                x={percentile.toString()}
                stroke="#8884d8"
                label={{ value: 'Your percentile', position: 'insideRight' }}
              />
              <Tooltip/>
            </LineChart>
            </ResponsiveContainer>
        </div>
        </div>
    </div>
  )
}

export default SkillCard 
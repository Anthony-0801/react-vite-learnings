import React from 'react'
import LevelThreePassComponent from './LevelThreePassComponent'

const times = {
    earlyMorning: 
    {
    title: 'Early Morning (5 AM - 8 AM):',
    description: 'The world starts to wake up, birds chirping, the sun rising.',
    emoji: '🕔',
    },
    morning: 
    {
        title: 'Morning (8 AM - 12 PM):',
        description: 'The day gets into full swing with work, school, and activities.',
        emoji: '🌅',
    },
    noon: 
    {
        title: 'Midday/Noon (12 PM - 1 PM):',
        description: `Time for lunch and a little break from the day's hustle.`,
        emoji: '🌞',
    },
    afterNoon: 
    {
        title: 'Afternoon (1 PM - 5 PM):',
        description: 'Energy is steady as the day progresses towards evening.',
        emoji: '🌤️',
    },
    evening:
    {
        title: 'Evening (5 PM - 8 PM):',
        description: 'The sun sets, and people start to unwind from their day.',
        emoji: '🌇',
    },
    night: 
    {
        title: 'Night (8 PM - 12 AM):',
        description: 'Time to relax, watch TV, read, or sleep.',
        emoji: '🌙',
    },
    lateNight: {
        title: 'Late Night (12 AM - 5 AM):',
        description: 'The world is quiet, perfect for deep sleep or creativity for night owls.',
        emoji: '🌌',
    }
}

export default function LevelThree() {

  return (
    <div>
        <h1 className='font-bold text-lg font-sans mb-2 border-b-2'>Level 3: In this level, I'll map an array list of times of day but I'll pass some props in the LevelThreePassComponent component's props and display it here at this section.</h1>
        
        {
            Object.values(times).map((time, index) => 
            (
                <LevelThreePassComponent index={index} title={time.title} description={time.description} emoji={time.emoji} />
            ))
        }
    </div>
  )
}

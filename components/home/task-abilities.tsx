// components/sections/TaskAbilities.tsx
import { pageConfig } from '@/lib/pageconfig';
import Image from 'next/image';

const  content= pageConfig.taskAbilities;

export default function TaskAbilities() {
  return (
    <section className="w-full bg-gray-50 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{content.title}</h2>
          <p className="mt-4 text-lg text-gray-600">{content.description}</p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {content.tasks.map((task) => (
            <div key={task.title} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{task.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{task.title}</h3>
                  <p className="mt-1 text-gray-600">{task.description}</p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <img 
                    src={task.images.input} 
                    alt={`Input for ${task.title}`} 
                    className="rounded-md border border-gray-200 aspect-square object-cover"
                    width={300}
                    height={300}
                  />
                </div>
                <div>
                   <Image 
                    src={task.images.output} 
                    alt={`Output for ${task.title}`} 
                    className="rounded-md border border-gray-200 aspect-square object-cover"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
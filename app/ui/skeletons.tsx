// Loading animation
// const shimmer =
//   'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';
const shimmer = `
  relative overflow-hidden before:content-[''] before:absolute before:inset-0
  before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r 
  before:from-transparent before:via-white/60 before:to-transparent
`;

export function EducationSkeleton() {
    return (
        <div className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-6 shadow-sm`}>
            <div className="h-5 w-3/4 bg-gray-200 rounded-md mb-3"></div> {/* Simulated heading */}
            <div className="h-4 w-1/2 bg-gray-200 rounded-md"></div> {/* Simulated subtext */}
        </div>
    );
}

export function IntroSkeleton() {
    return (
        <div className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-6 shadow-sm`}>
            <div className="h-5 w-3/4 bg-gray-200 rounded-md mb-3"></div> {/* Simulated heading */}
            <div className="h-4 w-1/2 bg-gray-200 rounded-md"></div> {/* Simulated subtext */}
        </div>
    );
}

export function ExperienceSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            {[1, 2, 3].map((_, index) => (
                <div key={index} className={`animate-pulse relative overflow-hidden rounded-xl bg-gray-100 p-6 shadow-sm`}>
                    <div className="h-5 w-3/4 bg-gray-200 rounded-md mb-3"></div> {/* Simulated job title */}
                    <div className="h-4 w-1/2 bg-gray-200 rounded-md mb-2"></div> {/* Simulated company */}
                    <div className="h-4 w-1/3 bg-gray-200 rounded-md mb-2"></div> {/* Simulated location */}
                    <div className="h-4 w-1/4 bg-gray-200 rounded-md mb-4"></div> {/* Simulated date range */}
                    <div className="space-y-2">
                        <div className="h-3 w-full bg-gray-200 rounded-md"></div> {/* Simulated info line */}
                        <div className="h-3 w-4/5 bg-gray-200 rounded-md"></div> {/* Simulated info line */}
                        <div className="h-3 w-3/4 bg-gray-200 rounded-md"></div> {/* Simulated info line */}
                    </div>
                </div>
            ))}
        </div>
    );
}

export function ProjectsSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            {[1, 2, 3].map((_, index) => (
                <div key={index} className={`animate-pulse relative overflow-hidden rounded-xl bg-gray-100 p-6 shadow-sm`}>
                    <div className="h-5 w-3/4 bg-gray-200 rounded-md mb-3"></div> {/* Simulated project name */}
                    <div className="h-4 w-1/2 bg-gray-200 rounded-md mb-4"></div> {/* Simulated date */}
                    <div className="h-4 w-full bg-gray-200 rounded-md mb-4"></div> {/* Simulated description */}
                    <div className="flex flex-wrap gap-2">
                        <div className="h-4 w-1/4 bg-gray-200 rounded-md"></div> {/* Simulated technology */}
                        <div className="h-4 w-1/4 bg-gray-200 rounded-md"></div> {/* Simulated technology */}
                        <div className="h-4 w-1/4 bg-gray-200 rounded-md"></div> {/* Simulated technology */}
                    </div>
                </div>
            ))}
        </div>
    );
}

export function SkillsSkeleton() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                <div key={index} className={`animate-pulse relative overflow-hidden rounded-xl bg-gray-100 p-6 shadow-sm`}>
                    <div className="h-4 w-3/4 bg-gray-200 rounded-md mx-auto"></div> {/* Simulated skill */}
                </div>
            ))}
        </div>
    );
}
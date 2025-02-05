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
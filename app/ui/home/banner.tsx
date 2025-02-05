import EducationContainer from "@/app/ui/home/education"
import Intro from "@/app/ui/home/intro"
import { IntroSkeleton, EducationSkeleton} from "@/app/ui/skeletons"
import { Suspense } from "react"

export default function BannerContainer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 pt-8">
            <Suspense fallback={<IntroSkeleton/>}>
                <Intro/>
            </Suspense>
            <Suspense fallback={<EducationSkeleton/>}>
                <EducationContainer/>
            </Suspense>
        </div>
    )
}
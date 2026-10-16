import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Programs } from "@/components/home/Programs";
import { CampaignLab } from "@/components/home/CampaignLab";
import { Journey } from "@/components/home/Journey";
import { CourseTabs } from "@/components/home/CourseTabs";
import { StudentProjects } from "@/components/home/StudentProjects";
import { SuccessStories } from "@/components/home/SuccessStories";
import { PlacementSnapshot } from "@/components/home/PlacementSnapshot";
import { Mentors } from "@/components/home/Mentors";
import { Campus } from "@/components/home/Campus";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";
import EnrollmentToast from "@/components/EnrollmentToast";
import LeadPopup from "@/components/LeadPopup";
export default function HomePage() {
  return (
    <>
      <Hero />
      <EnrollmentToast />
 <LeadPopup />
      <Stats />
      <Programs />
      <CampaignLab />
      <Journey />
      <CourseTabs />
      <StudentProjects />
      <SuccessStories />
      <PlacementSnapshot />
      <Mentors />
      <Campus />
      <Faq />
      <FinalCta />
      
    </>
  );
}

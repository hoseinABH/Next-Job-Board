'use client';
import { Fragment } from 'react';
// UI Frameworks
import { ScanFace } from 'lucide-react';
// Common components
import { AboutMeModal } from '@/components/modal';
import { Button } from '@/components/ui/button';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import useUserStore from '@/store/user';
// Types
import type { AboutData } from '@/types/user';

interface Props {
  aboutData: AboutData;
}

export default function AboutSection({ aboutData }: Props) {
  const { firstName, lastName, title, aboutMe } = aboutData;
  const { openModal } = useUserStore();
  function openEditModal() {
    openModal(true, 'aboutMe');
  }
  const isEmpty = !Boolean(aboutMe || title);
  const fullName = `${firstName} ${lastName}`;
  return (
    <Fragment>
      <SectionWrapper
        id="about-me"
        title="درباره من"
        icon={ScanFace}
        actionType="edit"
        actionHandler={openEditModal}
      >
        {isEmpty ? (
          <div className="flex h-28 items-center justify-center">
            <Button variant="secondary" onClick={openEditModal}>
              ثبت درباره من
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-0 text-2xl">{fullName ?? '-'}</p>
            <p className="flex items-center text-muted-foreground">{title}</p>
            <p className="mt-2 text-center text-sm leading-6 text-muted-foreground md:text-right">
              {aboutMe}
            </p>
          </div>
        )}
      </SectionWrapper>
      <AboutMeModal defaultValues={{ title, aboutMe }} />
    </Fragment>
  );
}

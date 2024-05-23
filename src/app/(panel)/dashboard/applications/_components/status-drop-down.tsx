import { useState } from 'react';
// Common components
import Spinner from '@/components/spinner';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Grip } from 'lucide-react';
// Types
import type { ApplicationStatus } from '@/types/company';
import type { UpdatePositionStatusDto } from '@/types/internship';

interface Props {
  action: (data: UpdatePositionStatusDto) => void;
  reqId: number;
  applicationStatus: ApplicationStatus;
  pending: boolean;
}

interface Menu {
  title: string;
  status: ApplicationStatus;
}

export default function StatusDropdown({ action, reqId, applicationStatus, pending }: Props) {
  const [visible, setVisible] = useState(false);
  const [targetStatus, setTargetStatus] = useState<ApplicationStatus>(applicationStatus);
  const menuItems: Menu[] = [
    {
      title: 'تایید برای مصاحبه',
      status: 1,
    },
    {
      title: 'رد درخواست',
      status: 3,
    },
    {
      title: 'استخدام',
      status: 2,
    },
    {
      title: 'در انتظار بررسی',
      status: 0,
    },
  ];
  function selectMenu(menuStatus: ApplicationStatus) {
    setTargetStatus(menuStatus);
    action({ reqId, requestStatus: menuStatus });
  }
  function onOpenChange(open: boolean) {
    if (pending) return;
    setVisible(open);
  }
  return (
    <DropdownMenu open={visible} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger onClick={(e) => e.stopPropagation()}>
        <Grip className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="center" onClick={(e) => e.stopPropagation()}>
        {menuItems.map((menu) => (
          <DropdownMenuCheckboxItem
            className="h-8"
            key={menu.status}
            onClick={() => selectMenu(menu.status)}
            disabled={applicationStatus === menu.status}
            checked={applicationStatus === menu.status}
          >
            {pending && targetStatus === menu.status ? <Spinner /> : menu.title}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

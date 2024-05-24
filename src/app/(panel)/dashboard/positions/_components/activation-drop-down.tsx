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
import type { PositionActivationDto } from '@/types/internship';

interface Props {
  action: (data: PositionActivationDto) => void;
  positionId: number;
  isActive: boolean;
  pending: boolean;
}

interface Menu {
  title: string;
  status: boolean;
}

export default function ActivationDropdown({ action, positionId, isActive, pending }: Props) {
  const [visible, setVisible] = useState(false);
  const [targetStatus, setTargetStatus] = useState<boolean>(isActive);
  const menuItems: Menu[] = [
    {
      title: 'فعال سازی',
      status: true,
    },
    {
      title: 'غیر فعال سازی',
      status: false,
    },
  ];
  function selectMenu(status: boolean) {
    setTargetStatus(status);
    action({ positionId, isActive: status });
    setTimeout(() => {
      onOpenChange(false);
    }, 300);
  }
  function onOpenChange(open: boolean) {
    if (pending) return;
    setVisible(open);
  }
  return (
    <DropdownMenu open={visible} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger title="وضعیت" disabled={pending}>
        <Grip className="h-5 w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="center">
        {menuItems.map((menu) => (
          <DropdownMenuCheckboxItem
            className="h-8"
            key={menu.title}
            onClick={() => selectMenu(menu.status)}
            disabled={isActive === menu.status}
            checked={isActive === menu.status}
          >
            {pending && targetStatus === menu.status ? <Spinner /> : menu.title}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

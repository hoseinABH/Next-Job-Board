// Utilities
import { getVersion } from '@/lib/version';

export default function AppVersion() {
  return <p className="text-muted-foreground">نسخه {getVersion()} </p>;
}

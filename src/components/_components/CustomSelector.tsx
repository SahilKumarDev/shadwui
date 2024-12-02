import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuContent,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export function CustomSelector({ children }: { children: React.ReactNode }) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem disabled inset>
          Not access to preview code
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

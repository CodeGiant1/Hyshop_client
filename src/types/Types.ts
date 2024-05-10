export type SidebarContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export interface SidebarItemProps {
    icon: React.ReactNode;
    text: string;
    active: boolean;
    alert?: boolean;
    value?: [];
    url: string;
}
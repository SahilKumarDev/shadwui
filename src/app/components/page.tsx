import Box from "@/components/_components/Box";
import CenterText from "@/components/_components/CenterText";

const ComponentsPage = () => {
  const componentsItems = [
    { name: "Alerts", isAvailable: true },
    { name: "Banners", isAvailable: true },
    { name: "Buttons", isAvailable: true },
    { name: "Checkboxs", isAvailable: true },
    { name: "Inputs", isAvailable: true },
    { name: "Notifications", isAvailable: true },
    { name: "Radios", isAvailable: true },
    { name: "Switchs", isAvailable: true },
    { name: "Selects", isAvailable: true },
    { name: "Sliders", isAvailable: true },
    { name: "Textareas", isAvailable: true },

    { name: "Headings", isAvailable: false },
  ];

  return (
    <div className="space-y-8">
      <CenterText
        className="underline underline-offset-8 decoration-[#FF7700]"
        description="Discover components with seamless light and dark mode support, featuring consistent animations for a unified user experience."
      >
        Components Page
      </CenterText>
      <div className="grid-layout">
        {componentsItems.map((component) => (
          <Box
            key={component.name}
            redirect={`/components/${component.name.toLowerCase()}`}
            isAvailable={component.isAvailable}
          >
            {component.name}
          </Box>
        ))}
      </div>
    </div>
  );
};

export default ComponentsPage;

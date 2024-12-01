import Box from "@/components/_components/Box";
import CenterText from "@/components/_components/CenterText";

const ComponentsPage = () => {
  const componentsItems = [
    { name: "Alerts", isAvailable: true },
    { name: "Banners", isAvailable: true },
    { name: "Buttons", isAvailable: true },
    { name: "Checkboxs", isAvailable: true },
    { name: "Dialogs", isAvailable: false },
    { name: "Inputs", isAvailable: true },
    { name: "Headings", isAvailable: false },
    { name: "Notifications", isAvailable: false },
    { name: "Radios", isAvailable: false },
    { name: "Switchs", isAvailable: true },
    { name: "Selects", isAvailable: false },
    { name: "Sliders", isAvailable: true },
    { name: "Textareas", isAvailable: true },
  ];

  return (
    <div className="space-y-8">
      <CenterText description="Explore our component library">
        Component Catalog
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

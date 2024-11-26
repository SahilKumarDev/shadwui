import Box from "@/components/_components/Box";
import CenterText from "@/components/_components/CenterText";
 

const ComponentsPage = () => {
  return (
    <div className="space-y-8">
      <CenterText description="Hello from component">Componte page</CenterText>

      <div className="grid-layout">
        <Box redirect="/components/alerts">Alerts</Box>
        <Box redirect="/components/buttons">Buttons</Box>
        <Box redirect="/components/buttons">Sliders</Box>
        <Box redirect="/components/buttons">Alert</Box>
        <Box redirect="/components/buttons">Alert</Box>
        <Box redirect="/components/buttons">Alert</Box>
        <Box redirect="/components/buttons">Alert</Box>
        <Box redirect="/components/buttons">Alert</Box>
      </div>
    </div>
  );
};

export default ComponentsPage;

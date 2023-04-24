import Center from "@/components/Center";
import Collapse from "@/components/Collapse";

export default function CollapseExample() {
  return (
    <>
      <Center>
        <h1>折叠面板</h1>
      </Center>
      <Collapse>
        <h1>Hello</h1>
        <h1>world</h1>
        <h1>Woo!</h1>
      </Collapse>
      <Center>
        <h1>嵌套折叠面板</h1>
      </Center>
      <Collapse>
        <h1>Hello</h1>
        <h1>world</h1>
        <Collapse count={1}>
          <h1>Nice to meet you!</h1>
          <h1>bingo</h1>
        </Collapse>
      </Collapse>
    </>
  );
}

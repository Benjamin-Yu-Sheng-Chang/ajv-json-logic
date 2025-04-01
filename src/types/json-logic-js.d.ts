declare module 'json-logic-js' {
  interface JsonLogic {
    apply: (rule: any, data: any) => any;
    add_operation: (name: string, fn: Function) => void;
    rm_operation: (name: string) => void;
    is_logic: (rule: any) => boolean;
    truthy: (value: any) => boolean;
    rule_like: (rule: any, pattern: any) => boolean;
  }

  const jsonLogic: JsonLogic;
  export default jsonLogic;
}

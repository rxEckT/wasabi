use ast::{FunctionType, ValType};
use ast::highlevel::{Function, Module};

#[derive(Serialize)]
pub struct ModuleInfo {
    pub functions: Vec<FunctionInfo>,
    pub globals: Vec<ValType>,
    pub table_export_name: String,
//    pub table: Vec<usize>,
    pub br_tables: Vec<BrTableInfo>,
}

impl<'a> From<&'a Module> for ModuleInfo {
    fn from(module: &Module) -> Self {
        ModuleInfo {
            functions: module.functions.iter().map(Into::into).collect(),
            globals: module.globals.iter().map(|g| g.type_.0).collect(),
//            table: module.tables.iter()
//                .flat_map(|table| table.elements.clone())
//                .map(|element| {
//                    eprintln!("{:?}", element.offset);
//                    eprintln!("{:?}", module.eval_const_expr(&element.offset));
//                    0usize
//                }).collect(),
            table_export_name: module.tables.get(0).and_then(|table| table.export.clone()).unwrap_or("".into()),
            br_tables: vec![],
        }
    }
}

#[derive(Serialize)]
pub struct FunctionInfo {
    #[serde(rename = "type")]
    pub type_: FunctionType,
    pub import: Option<(String, String)>,
    pub export: Option<String>,
    pub locals: Vec<ValType>,
    #[serde(rename = "instrCount")]
    pub instr_count: Option<usize>,
}

impl<'a> From<&'a Function> for FunctionInfo {
    fn from(function: &Function) -> FunctionInfo {
        FunctionInfo {
            type_: function.type_.clone(),
            import: function.import.clone(),
            export: function.export.clone(),
            locals: function.code.iter().flat_map(|code| code.locals.clone()).collect(),
            instr_count: function.code.as_ref().map(|code| code.body.len()),
        }
    }
}

#[derive(Serialize, new)]
pub struct BrTableInfo {
    pub table: Vec<LabelAndLocation>,
    pub default: LabelAndLocation,
}

#[derive(Serialize, new)]
pub struct LabelAndLocation {
    pub label: usize,
    // FIXME actually compute Location from Label during instrumentation
    #[new(default)]
    pub location: Location,
}

#[derive(Serialize, new, Default)]
pub struct Location {
    pub func: usize,
    pub instr: usize,
}
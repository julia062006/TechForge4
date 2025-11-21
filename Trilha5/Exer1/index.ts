import { Project } from "./Project";
import { DailyTasks } from "./DailyTasks";

const projeto = new Project();
projeto.addTask("Implementar login");
projeto.addTask("Criar banco de dados");
projeto.addTask("Criar banco de dados"); 

console.log(projeto.listTasks());

const diarias = new DailyTasks();
diarias.addTask("Lavar a louça");
diarias.addTask("Lavar a louça"); 

console.log(diarias.listTasks());

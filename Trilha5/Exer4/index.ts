import { Election } from "./Election";
import { Poll } from "./Poll";

const election = new Election();
election.voteFor("Ana");
election.voteFor("Ana");
election.voteFor("Pedro");

console.log("Election Results:");
console.log(election.getResults());

const poll = new Poll();
poll.voteFor("JavaScript");
poll.voteFor("Python");
poll.voteFor("Python");

console.log("Poll Results:");
console.log(poll.getResults());

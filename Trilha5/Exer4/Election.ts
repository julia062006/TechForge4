import { VoteSystem } from "./VoteSystem";

export class Election extends VoteSystem {
    voteFor(candidate: string): void {
        const current = this.votes.get(candidate) || 0;
        this.votes.set(candidate, current + 1);
    }

    getResults(): object {
        const result: Record<string, number> = {};

        this.votes.forEach((value, key) => {
            result[key] = value;
        });

        return result;
    }
}

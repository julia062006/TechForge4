import { VoteSystem } from "./VoteSystem";

export class Poll extends VoteSystem {
    voteFor(candidate: string): void {
        const current = this.votes.get(candidate) || 0;
        this.votes.set(candidate, current + 1);
    }

    getResults(): object {
        const sorted = [...this.votes.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(([candidate, votes]) => ({ candidate, votes }));

        return sorted;
    }
}

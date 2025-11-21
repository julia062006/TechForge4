export abstract class VoteSystem {
    protected votes: Map<string, number> = new Map();

    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

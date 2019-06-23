import { EntityManager, EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

// This works without a problem
// @EntityRepository(User)
// export class UserRepository extends Repository<User> {
// }

// This not works
@EntityRepository(User)
export class UserRepository {
    private readonly repository: Repository<User>;

    constructor(manager: EntityManager) {
        this.repository = manager.getRepository(User);
    }
}
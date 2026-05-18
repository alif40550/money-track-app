import { Router } from "express";

class ExpenseRoutes {
  router: Router;
  routes: string;
  method: string;
  constructor(router: Router, routes: string, method: string) {
    this.router = router;
    this.routes = routes;
    this.method = method;
  }
}

export default ExpenseRoutes;

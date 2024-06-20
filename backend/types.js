// input validation using zod
const zod=require("zod");

// const mySchema=zod.string();
const createTodo=zod.object({
    title:zod.string(),
    description:zod.string()
});
const updateTodo=zod.object({
    id:zod.string()
})

// mySchema.safeParse(req.body.title);
// mySchema.safeParse(req.body.description);

module.exports={
    createTodo,
    updateTodo
}
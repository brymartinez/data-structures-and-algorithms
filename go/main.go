package main

import (
	"dsa-tutorial/queue"
	"dsa-tutorial/stack"
	"fmt"
)

func main() {
	var stack stack.Stack
	// Stack
	stack.Push(1)
	stack.Push(2)
	stack.Push(3)
	stack.Push(4)
	fmt.Println(stack.Pop())
	fmt.Println(stack.Pop())
	fmt.Println(stack.Pop())
	fmt.Println(stack.Pop())
	fmt.Println(stack.Pop())
	fmt.Println(stack)

	var queue queue.Queue

	q := queue.Create(4)
	q.Enqueue(1)

	fmt.Println(q)
	q.Dequeue()
	fmt.Println(q)
}

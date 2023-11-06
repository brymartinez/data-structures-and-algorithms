package main

import (
	"dsa-tutorial/stack"
	"fmt"
)

func main() {
	var stack stack.Stack
	// Stack
	stack.Push("a")
	stack.Push("b")
	stack.Push("c")
	stack.Push("d")
	fmt.Println(stack.Pop())
	fmt.Println(stack.Pop())
	fmt.Println(stack.Pop())
	fmt.Println(stack.Pop())
	fmt.Println(stack.Pop())
	fmt.Println(stack)
}

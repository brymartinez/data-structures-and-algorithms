package main

import (
	linkedlist "dsa-tutorial/linked-list"
	"fmt"
)

func main() {
	// var stack stack.Stack
	// // Stack
	// stack.Push(1)
	// stack.Push(2)
	// stack.Push(3)
	// stack.Push(4)
	// fmt.Println(stack.Pop())
	// fmt.Println(stack.Pop())
	// fmt.Println(stack.Pop())
	// fmt.Println(stack.Pop())
	// fmt.Println(stack.Pop())
	// fmt.Println(stack)

	// queue := queue.Queue{Size: 3}
	// queue.Enqueue(1)
	// queue.Enqueue(2)
	// queue.Enqueue(3)
	// _, err := queue.Enqueue(4)
	// if err != nil {
	// 	fmt.Println(err)
	// }

	// fmt.Println(queue.Elements)
	// queue.Dequeue()
	// queue.Dequeue()
	// queue.Dequeue()
	// _, err = queue.Dequeue()
	// if err != nil {
	// 	fmt.Println(err)
	// }

	// fmt.Println(queue.Elements)
	list := linkedlist.LinkedList{}

	fmt.Println(list)

	list.Push(1)

	list.Push(2)

	fmt.Println(list.Head.Next.Data == 2) // should be true
	node, err := list.Pop()
	if err == nil {
		fmt.Println(node.Data == 2) // should be true
	} else {
		fmt.Println(err)
	}
	list.Pop()
	_, err = list.Pop()
	if err != nil {
		fmt.Println(err)
	}

	list.Push(1)
	list.Push(2)

	list.Shift()

	fmt.Println(list.Head.Data == 2) // should be true
}

- Keel is a tool for automating [Kubernetes](https://kubernetes.io/) deployment updates. Keel is stateless, robust and lightweight.

- Automate your workflow from idea to production


```

                                                           +------------+
                                                           | Status Test|
                                                           |------------+
         +---------------+                   +----+             |
         |PUSH           | build-push image  | CI +-------------+
-------> |  PULL_REQUEST |+----------------->+----+
         +---------------+                      | 
                +                               |
                |                               |+---> KELL.sh |
                |                                          |   
                |                                          |  
                |                                          |  trigger polling force
                |                                          |
                |                                          |   +-------------------------+
                |                                          +-->+ Auto Update Deployment  |
                |                                              +-------------------------+
                |
                |
                |
                |
                |
                |                  +-------------+
                +----------------->|  UI GITHUB  |
                                   +-------------+
```
 
Any problems --ping me, I'm here 🥳 -- [KhanhNey](https://www.facebook.com/KhanhNey/)

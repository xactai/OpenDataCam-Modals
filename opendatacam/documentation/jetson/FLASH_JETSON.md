### ⚡️Flash Jetson Board:

*We support only jetpack version [4.3](https://developer.nvidia.com/jetpack-43-archive) (more recent versions might also work)*

#### How to find out my Jetpack version

You can check your Jetpack version with this tool: [https://github.com/rbonghi/jetson_stats](https://github.com/rbonghi/jetson_stats)

```bash
# Update package manager
sudo apt update
# Install Pip package manager
sudo apt install python-pip
# Install jetson-stats
sudo -H pip install jetson-stats
# Print info about jetson
jetson_release

# Output should be something like:
# - NVIDIA Jetson TX2
#  * Jetpack 4.3 [L4T 32.3.1]
#  * CUDA GPU architecture 6.2
#  * NV Power Mode: MAXN - Type: 0
```

#### Jetson Nano

##### Flash the SD Card

Directly flash the microSD card with jetpack, follow this guide:

[https://nvidia.com/JetsonNano-Start](https://nvidia.com/JetsonNano-Start)

*On the third page titled "Write Image to the microSD Card", make one slight change:*

On step 1, rather than download the jetson nano developer kit image from the link provided, download from the jetpack archives for version [4.3](https://developer.nvidia.com/jetpack-43-archive). Click the download link for the appropriate platform you are using.
Continue following at step 2 to write the image to your microSD card.

Once you've got to the page **Next Steps** or you've managed to get a successful first boot then you are ready to proceed.

##### CUDA Installation

Try the following command `nvcc --version`. If your output looks like:

```bash
bash: nvcc: command not found
```

then you'll need to do the next steps.

Edit the `.bashrc` file in your home folder with the command `sudo gedit .bashrc`
Copy and paste the lines below to the bottom of `.bashrc`, then save and close the editor:

```bash
export PATH=${PATH}:/usr/local/cuda/bin
export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:/usr/local/cuda/lib64
```

After you made the changed do one of the following:

* Reload PATH and LD_LIBRARY_PATH with `source .bashrc`
* Close the Terminal and open it again

Now verify that `nvcc` is working by running  `nvcc --version` again

Output in the terminal should now look like:

```
nvcc: NVIDIA (R) Cuda complier driver
Copyright (c) 2005-2019 NVIDIA Corporation
...
```

#### Jetson TX2 / Jetson Xavier

- Since march 2019, Nvidia has released a SDK manager tool to flash jetson, complete doc is available here: https://docs.nvidia.com/sdk-manager/index.html
- You need a machine running Ubuntu to install it *(that is not the jetson)*, download link is here: https://developer.nvidia.com/embedded/downloads
- Then follow the steps of the documentation: https://docs.nvidia.com/sdk-manager/install-with-sdkm-jetson/index.html

**Common issues:**

- When you reach the flashing part, the automatic mode didn't work for us when writing this doc, we did flash using manual mode. *(You need to put in [recovery mode manualy](https://www.youtube.com/watch?v=HaDy9tryzWc) and verify it with this [command](https://devtalk.nvidia.com/default/topic/1006401/jetson-tx2/not-able-to-get-into-recovery-mode/post/5205375/#5205375))*

- If you get `LOST CONNECTION to jetson` , try replug-in the usb cable - also make sure that **python** ist installed on the host computer (`$ sudo apt-get install python`), since this can cause that error as well.

- NANO: After the initial setup of the nano the **software updater** can be stuck. If this happens you can follow this guide to solve this issue: [Ubuntu update error “waiting for unattended-upgr to exit”
](https://unix.stackexchange.com/questions/374748/ubuntu-update-error-waiting-for-unattended-upgr-to-exit)

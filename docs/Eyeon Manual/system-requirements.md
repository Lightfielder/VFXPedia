## System Requirements

Before installing Fusion, review the following system requirements.

### Hardware Requirements And Recommendations

#### Processor

Fusion will take advantage of Intel and AMD processors equally well. It is recommended to have at least a Pentium 4 or Althon 64 processor to operate Fusion. The 64 bit version of Fusion will require Fusion is able to take advantage of dual core and hyperthreaded processors, and thrives when multiple processors are available.

#### Graphics

Fusion requires OpenGL capable ATI or NVidia graphics cards. Available graphics memory should be 256 MB or greater, with 512MB or greater suggested for best performance. The Fusion interface requires a screen resolution of 1280 x 1024 pixels or greater at 32 bit per channel (true color). Higher resolutions are suggested.

Fusion's graphics card requirements will be higher for 3D intensive composites. For example, 3D scenes employing large numbers of textures, or very large textures will require significantly more memory for the graphics card. Additionally Fusion 6 makes more extensive use of the GPU for many 3D operations. A modern graphics card will have a much bigger impact on interactivity and performance in Fusion 6 than was previously true in Fusion 5.

High end workstation class graphics cards should not be required, a decent mid-class gaming class card with large amounts of memory is generally sufficient.

Fusion Render Slaves will be unable to render OpenGL 3D scenes unless they have an OpenGL capable graphics card. Software rendering of 3D scenes will not require a graphics card.

#### Memory

Fusion is designed to make use of every kilobyte of memory available. A minimum of 1GB of memory is required, and 2GB or greater is strongly recommended. When using 2GB or more of memory in conjunction with 32 bit Microsoft operating systems it is strongly suggested that the /3GB switch is applied. 

See http://web.eyeonline.com/Web/EyeonWeb/Support/TechFAQ.aspx#15

#### DVD-ROM And CD

The Fusion installer and training materials are shipped on a DVD-ROM.USB Porteyeon Software uses a hardware lock as part of its licensing system. This is a small device that connects to the USB port. The hardware lock should be attached directly to the workstation when local licensing is used. In facilities where Fusion licensing is handled by a FlexLM license server, the hardware lock will be attached to the server running the eyeon licensing daemon.

New licenses of Fusion ship with a USB hardware lock unless a parallel port lock is specified when Fusion is ordered. Upgraded copies of Fusion will use whatever hardware lock that is available to the previous version of Fusion or Vision.

#### Hard Drives

Fusion requires a minimum of 150 Mb of hard disk space to install, and a typical installation with all help materials, courseware and examples may occupy as much as 4GB of drive space.

When working with images stored locally to the workstation, the speed of the drives can be a major factor in the performance of Fusion. If the majority of the images used in a composite come from a remote fileserver or SAN, the network will be a much bigger factor in rendering speed than the drive performance.

The vfxpedia page http://vfxpedia.com/index.php?title=Choosing_Hardware_for_Fusion should have a detailed discussion of graphics card requirements and performance.

### Software Requirements

#### Operating Systems

The following operating systems are supported by Fusion 6.0

- Microsoft Windows XP Professional Service Pack 2 or greater
- Microsoft Windows XP Professional x64 Edition Service Pack 2 or greater
- Microsoft Windows Vista (Home/Business/Ultimate)
- Microsoft Windows Vista (Business/Ultimate) 64-bit
- Linux (most modern distributions)

#### QuickTime

The 32 bit version of Fusion requires Apple Quicktime to be installed on the workstation and render nodes in order to read and write to the MOV and PNG file formats. At the time this manual was written Quicktime libraries were unavailable for 64 bit operating systems, and as a result these formats are unavailable in 64 bit native versions of Fusion.

### Notes

Microsoft Windows 7 was not yet available when this documentation was written, but initial testing with the release candidate has indicated there should be no major issues. eyeon Software is commited to supporting this operating system when it is released.

Due to the poor Open GL support in most virtualization platforms eyeon does not currently support operation of Fusion under virtualization. The Fusion Render Slave should operate under virtualization, though it is more efficient to run directly on the hardware.

See [http://vfxpedia.com/index.php?title=Choosing_Hardware_for_Fusion](http://vfxpedia.com/index.php?title=Choosing_Hardware_for_Fusion) for the most up to date information on choosing hardware for Fusion.


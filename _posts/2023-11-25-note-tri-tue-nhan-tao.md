---
layout: post
title: Note về trí tuệ nhân tạo
author: Vy Tien
tags: basicai
categories: sgu
date: '2023-11-25'
cover-img: https://images.spiderum.com/sp-thumbnails/58828ed0828311ebb2950b074b6d605f.jpg
share-img: https://images.spiderum.com/sp-thumbnails/58828ed0828311ebb2950b074b6d605f.jpg

comments: true
---


<ul>
<li><a href="#nội-dung">Nội dung</a></li>
<li><a href="#thuật-toán-quinlan-john-ross-quinlan-năm-1979">Thuật toán Quinlan (John Ross Quinlan) năm 1979</a></li>
<li><a href="#bài-tập-1">Bài tập 1</a>
<ul>
<li><a href="#đổi-sang-bảng-dữ-liệu-theo-tiêu-chí">Đổi sang bảng dữ liệu theo tiêu chí</a></li>
</ul>
</li>
</ul>


# Nội dung

Phép thử Turing (1950)

Khi nào máy tính gạt được giám khảo thì máy tính đó pass phép thử Turing.

```mermaid
flowchart
p1["Giám khảo"]
p2["1"]
p3["2"]
p1<-->p2
p1<-->p3
```
Đề tài nghiên cứu
2011: IBM Question-answering <=> Jeoparody (U.S.)
Giá trị 6 tỷ USD 
![Hệ thống question-answering](https://static01.nyt.com/images/2010/06/20/magazine/20Computer-span/20Computer-span-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale)

Vẫn là hệ thống thông minh giả

```mermaid
flowchart LR
p1["A.I."]
p2["NLP (Natural language processing)"]
p3["Machine learning"]
p1-->p2
p1-->p3
```
Flow trí tuệ nhân tạo
```mermaid
flowchart TD
p1["Training Data"]
p2["ML Model (Learning.Statistical)"]
p3["Result (Functions/rules) để giải quyết bài toán mới"]
p4["(New) Data"]
p5["Result"]
p1-->p2-->p3
p4-->p3
p3-->p5
```

Cây quyết định, đầu vào là bảng dữ liệu, kết quả là cây quyết định, rút ra được kết luận.

```mermaid
flowchart TD
p1["Training Data"]
p2["Learning (Decision tree model)"]
p3["Result (Decision tree)"]
p4["(New) Data"]
p5["Classification (1/0)"]
p1-->p2-->p3
p4-->p3
p3-->p5
```

# Thuật toán Quinlan (John Ross Quinlan) năm 1979

Đưa vào trainning data dạng bảng

| Mẫu | Thời tiết | Lá cây | Nhiệt độ | Quyết định (mùa) |
|--|--|--|--|--|
| 1 | Mưa | Rụng | Thấp | Đông |
| 2 | Nắng | Xanh | Trung bình | Xuân |
| 3 - 12 | ... |
|x,y,z | Mưa | Vàng | Cao | ? |

![enter image description here](https://i.imgur.com/hXgaz3u.jpg)

a. Từ mẫu 1 - 12, rút ra bộ luật quyết định mùa theo thuật toán Quinlan
b. Áp dụng cho mẫu x, y, z

![enter image description here](https://i.imgur.com/2XRcmV7.jpg)

![enter image description here](https://i.imgur.com/pwCg8Jn.jpg)

**Chọn thuộc tính tốt (Càng nhiều vector đơn vị càng tốt), nếu bằng nhau thì lấy ngẫu nhiên**

*CSDL ⇒ Bảng
![enter image description here](https://i.imgur.com/iDr05CE.jpg)

![enter image description here](https://i.imgur.com/UVhd1dB.jpg)

Tập luật
![enter image description here](https://i.imgur.com/GCptATQ.jpg)

Từ tập luật ⇒ Xác định được kết quả.

[Slide tài liệu học tập](https://drive.google.com/file/d/17ay5Cy3dzw2U_cm9T48AnsvSBgpnPhdZ/view?fbclid=IwAR1XOe3Cd8jnFj3PxJZsuZXLF61_3iEK6Y-eBQsXlOE9yDe1vxet-AbRcAg)

# Bài tập 1

![enter image description here](https://i.imgur.com/ohGJ4Ht.png)

1. Hãy rút ra kết luận từ cây quyết định được xây dựng.
2. Dùng các luật rút ra từ cây quyết định để phân loại dữ liệu sau
	a. (33, 70, 18, 1)
	b. (25, 65, 10, 0)
	c. (35, 60, 15, 1)	

## Đổi sang bảng dữ liệu theo tiêu chí
Nhiệt độ: 
- 15 - 19 (mát)
- 20 - 24 (bình thường - BT)
- 25 - 29 (nóng)
- 30 - ... (rất nóng)

Độ ẩm
- 60 - 69 : thấp
- 70 - 79 : trung bình (TB)
- 80 - 89 : cao
- 90 - ... : rất cao

Gió
- 1 - 4 : thấp
- 5 - 9 : trung bình (TB)
- 10 - 14 : cao
- 15 : rất cao

| Nhiệt độ | Độ ẩm (%) | Gió (km/h) | Nắng | Mang ô dù |
|--|--|--|--|--|
| Nóng | Cao | Cao | Có | Có |
| Cao | Thấp | Cao | Không | Không |
| BT | TB | TB | Có | Có |
| Mát | Cao | TB | Không | Có |
| Nóng | Thấp | Cao | Có | Không |
| BT | TB | TB | Không | Có |
| Nóng | Cao | TB | Có | Không |
| BT | Thấp | Thấp | Không | Có |

B0: Gọi vector độ đo v = {Có, Không}
B1: Tính vector độ đo của các thuộc tính ở cơ sở dữ liệu ban đầu.
Thuộc tính **Nhiệt độ**
Nóng: v= {1/3, 2/3}


# KTECH-WEB — CODEX TASK 06
## Verified Company Information, Contact Integration and Production SEO

Làm việc trực tiếp bằng **Codex Work locally** trên repository:

```text
/Users/lucatxtruong/Documents/Ktech-web
```

Branch bắt buộc:

```text
main
```

Không tạo branch mới.  
Không chuyển branch.  
Không commit hoặc push trong task này.

---

# 1. Mục tiêu

Homepage đã hoàn thiện cấu trúc và visual polish.

Task này tập trung vào:

1. tích hợp thông tin doanh nghiệp đã được xác minh;
2. hoàn thiện Contact CTA và Footer bằng contact thật;
3. hoàn thiện metadata SEO cho VI/EN;
4. canonical, language alternates, sitemap và robots;
5. Open Graph và browser metadata cơ bản;
6. kiểm tra routing, 404 và production build;
7. chuẩn bị codebase sẵn sàng cho deployment sau này.

Không deploy trong task này.

Không thay đổi visual direction hoặc redesign homepage đã duyệt.

---

# 2. Xác minh repository

Trước khi chỉnh sửa, chạy:

```bash
pwd
git status --short
git branch --show-current
git log --oneline -5
```

Yêu cầu:

- repository phải là `/Users/lucatxtruong/Documents/Ktech-web`;
- branch phải là `main`;
- audit working tree trước khi sửa;
- không reset, stash, discard hoặc overwrite thay đổi của người dùng.

Nếu repository hoặc branch không đúng, dừng lại và báo rõ.

Review tối thiểu:

- `src/app/layout.tsx`;
- `src/app/[locale]/layout.tsx`;
- `src/app/[locale]/page.tsx`;
- locale routing và dictionaries;
- Contact CTA;
- Footer;
- current metadata implementation;
- `not-found.tsx`;
- existing favicon/icon files;
- `next.config.*`;
- `public/`;
- package scripts;
- current build behavior.

Không chỉnh sửa:

```text
assets/source-approved/
```

---

# 3. Thông tin doanh nghiệp đã xác minh

Chỉ sử dụng các thông tin dưới đây.

## Domain chính thức

```text
https://ktechviet.com
```

## Email

```text
info@ktechviet.com
```

## Số điện thoại hiển thị

```text
0888 23 23 66
```

## Telephone URI

Dùng định dạng phù hợp cho `tel:`:

```text
tel:+84888232366
```

Không thay đổi số điện thoại hiển thị nếu không cần.

## Địa chỉ tiếng Việt

```text
458 Minh Khai, Vĩnh Tuy, Hà Nội, Việt Nam
```

## Địa chỉ tiếng Anh

```text
458 Minh Khai, Vinh Tuy, Hanoi, Vietnam
```

## Tên thương hiệu

```text
Ktech Việt Nam
```

## Tên pháp lý

Chuẩn hóa cách viết trong code và giao diện thành:

```text
Ktech Viet Nam Company Limited
```

## Năm thành lập

```text
2015
```

## Mã số thuế

Không đưa mã số thuế lên website.

## Deployment

Chưa cấu hình hoặc triển khai lên nền tảng hosting trong task này.

---

# 4. Content architecture

Tạo một nguồn dữ liệu doanh nghiệp dùng chung, typed và dễ bảo trì.

Có thể tạo file phù hợp với architecture hiện tại, ví dụ:

```text
src/content/company.ts
```

hoặc tích hợp vào content layer hiện có nếu đã có nơi phù hợp hơn.

Nguồn dữ liệu dùng chung nên chứa tối thiểu:

- brand name;
- legal name;
- established year;
- canonical domain;
- email;
- phone display;
- phone URI;
- localized address;
- slogan.

Không hardcode lặp lại các thông tin này ở nhiều visual components.

Không over-engineer hoặc tạo CMS-style structure.

---

# 5. Contact CTA integration

Cập nhật Contact CTA bằng contact thật.

## Primary actions

Cung cấp hai phương thức liên hệ rõ ràng:

1. email;
2. gọi điện thoại.

Vietnamese labels có thể dùng:

```text
Gửi email
Gọi 0888 23 23 66
```

English labels có thể dùng:

```text
Send an email
Call 0888 23 23 66
```

Destinations:

```text
mailto:info@ktechviet.com
tel:+84888232366
```

Yêu cầu:

- không tạo contact form;
- không tạo backend;
- không mở email bằng JavaScript;
- dùng semantic anchor;
- visible focus state;
- external-app behavior tự nhiên;
- không dùng `target="_blank"` cho `mailto:` hoặc `tel:` nếu không cần;
- giữ CTA theo phong cách B2B restrained;
- không làm contact section giống sales landing page.

Có thể hiển thị địa chỉ công ty trong Contact section nếu layout phù hợp, nhưng không làm section quá dày.

---

# 6. Footer integration

Cập nhật Footer với thông tin thật:

- Ktech Việt Nam;
- Ktech Viet Nam Company Limited;
- established 2015 nếu hiện tại phù hợp;
- `Understand the universe`;
- email;
- phone;
- localized address;
- anchor navigation hiện có.

Yêu cầu:

- email dùng `mailto:`;
- phone dùng `tel:`;
- địa chỉ là text, không tạo Google Maps link nếu chưa có URL chính thức được xác minh;
- không thêm social icons;
- không thêm tax code;
- không thêm legal links giả;
- không thêm partner/customer logos;
- không lặp lại quá nhiều nội dung từ Contact CTA;
- mobile layout gọn và dễ đọc.

---

# 7. Localized metadata

Hoàn thiện metadata riêng cho `/vi` và `/en`.

Dùng Next.js Metadata API hiện tại, không thêm SEO dependency.

## Vietnamese title

```text
Ktech Việt Nam | Kỹ thuật, công nghệ và sản xuất công nghiệp
```

## Vietnamese description

```text
Ktech Việt Nam cung cấp năng lực nghiên cứu, thiết kế kỹ thuật, chế tạo, tích hợp hệ thống, AI cho doanh nghiệp, tự động hóa, gia công CNC và giải pháp công nghiệp.
```

## English title

```text
Ktech Vietnam | Engineering, Technology and Industrial Manufacturing
```

## English description

```text
Ktech Vietnam provides research, engineering design, manufacturing, system integration, enterprise AI, automation, precision CNC machining and industrial solutions.
```

Yêu cầu:

- metadata phải theo locale;
- giữ title và description trong giới hạn hợp lý;
- không keyword stuffing;
- không invent certification, partner, customer hoặc project;
- không dùng “investment advisory”;
- không thêm location keywords không liên quan.

Có thể dùng title template nếu architecture hiện tại phù hợp, nhưng không làm phức tạp không cần thiết.

---

# 8. Metadata base, canonical và language alternates

Cấu hình domain chính thức:

```text
https://ktechviet.com
```

Sử dụng `metadataBase` nếu phù hợp với Next.js architecture hiện tại.

Canonical:

```text
https://ktechviet.com/vi
https://ktechviet.com/en
```

Language alternates:

```text
vi-VN → https://ktechviet.com/vi
en    → https://ktechviet.com/en
x-default → https://ktechviet.com/vi
```

Yêu cầu:

- tránh duplicate canonical;
- không dùng localhost trong production metadata;
- không tạo canonical tới path không tồn tại;
- giữ redirect `/` → `/vi` như architecture hiện tại;
- invalid locale vẫn phải trả `notFound()`.

---

# 9. Open Graph metadata

Thêm Open Graph metadata cơ bản cho VI/EN:

- localized title;
- localized description;
- canonical URL;
- site name:
  - `Ktech Việt Nam`;
- locale:
  - Vietnamese: `vi_VN`;
  - English: `en_US`;
- type:
  - `website`.

## Open Graph image

Audit asset hiện có.

Chỉ sử dụng ảnh Hero đã approved và đã được xử lý trong `public/` nếu kích thước và crop phù hợp.

Không dùng source original trực tiếp.

Nếu chưa có variant 1200×630 phù hợp:

- không tự tạo ảnh bằng AI;
- có thể tạo một derived crop từ approved Hero bằng asset-processing approach hiện có;
- giữ source original immutable;
- output đặt trong `public/images/`;
- không chèn marketing copy vào ảnh;
- không làm sai lệch nội dung ảnh;
- không overwrite variants hiện có.

Nếu việc tạo OG image vượt scope hoặc không thể bảo đảm crop tốt, dùng ảnh Hero variant phù hợp nhất hiện có và báo rõ trong final response.

---

# 10. Twitter/X metadata

Có thể thêm metadata cơ bản:

```text
card: summary_large_image
```

Dùng cùng localized title, description và OG image.

Không thêm Twitter/X account chưa được xác minh.

---

# 11. Robots

Tạo hoặc cập nhật bằng Next.js metadata route:

```text
src/app/robots.ts
```

Yêu cầu production:

- cho phép crawl public website;
- sitemap URL:
  - `https://ktechviet.com/sitemap.xml`;
- không chặn `/vi` hoặc `/en`;
- không thêm environment-specific logic phức tạp nếu chưa cần;
- không để `noindex` trên production pages.

---

# 12. Sitemap

Tạo hoặc cập nhật:

```text
src/app/sitemap.ts
```

Chỉ đưa các URL đang thực sự tồn tại:

```text
https://ktechviet.com/vi
https://ktechviet.com/en
```

Yêu cầu:

- không thêm anchor URLs;
- không thêm capability detail pages chưa tồn tại;
- không thêm contact page chưa tồn tại;
- không invent `lastModified` từ dữ liệu giả;
- có thể dùng thời gian build hiện tại nếu phù hợp, nhưng ưu tiên implementation ổn định;
- localized alternates chỉ thêm khi Next.js type/API hiện tại hỗ trợ rõ ràng;
- không over-engineer.

---

# 13. Favicon và browser metadata

Audit favicon/icon hiện có.

Yêu cầu:

- không dùng logo JPG nền trắng làm favicon nếu hiển thị kém;
- không redesign logo;
- không tự tạo logo mới;
- nếu repository đã có favicon hợp lệ thì giữ nguyên;
- nếu chưa có favicon đủ tốt, báo rõ là cần user cung cấp logo/icon source phù hợp;
- không dùng emoji hoặc generic placeholder;
- cấu hình `themeColor` hoặc viewport metadata chỉ khi phù hợp với API Next.js hiện tại;
- màu browser UI nên bám deep navy hiện có.

Không tạo Apple touch icon giả từ asset chất lượng thấp nếu kết quả không tốt.

---

# 14. Structured data

Chỉ thêm JSON-LD nếu có thể làm chính xác và gọn.

Loại phù hợp:

```text
Organization
```

Dữ liệu được phép dùng:

- name;
- legalName;
- url;
- email;
- telephone;
- address;
- foundingDate: 2015;
- slogan.

Không thêm:

- logo URL nếu asset chưa phù hợp;
- tax ID;
- social profiles;
- certifications;
- founders;
- employees;
- customers;
- aggregate rating;
- products;
- price range.

Nếu triển khai JSON-LD:

- localized address phù hợp;
- serialize an toàn;
- không tạo client component;
- chỉ render một lần;
- không chứa dữ liệu chưa xác minh.

Nếu architecture hiện tại khiến structured data tạo complexity không cần thiết, ưu tiên metadata chuẩn và báo rõ chưa thêm JSON-LD.

---

# 15. Locale and routing QA

Kiểm tra:

```text
/
→ /vi

/vi
/en
```

Invalid locale path phải trả 404/notFound đúng.

Kiểm tra:

- locale switch giữ path hợp lý;
- canonical không bị ảnh hưởng bởi redirect;
- `<html lang>` đúng theo locale;
- VI/EN metadata đúng;
- contact links hoạt động ở cả hai locale;
- không có hardcoded locale sai;
- anchor navigation vẫn hoạt động.

Không tạo middleware mới nếu routing hiện tại đã hoạt động tốt.

---

# 16. 404 and error presentation

Audit `not-found.tsx`.

Yêu cầu:

- không redesign lớn;
- bảo đảm trang 404 render không lỗi;
- có đường quay về `/vi` hoặc destination hợp lệ;
- không hardcode link sai;
- nếu current 404 chưa localized, chỉ cải thiện trong phạm vi hợp lý;
- không tạo hệ thống error page phức tạp.

---

# 17. Security and privacy basics

Không thêm:

- analytics;
- trackers;
- cookies;
- contact form;
- third-party embeds;
- map iframe;
- chat widget.

Kiểm tra các external links hiện có:

- chỉ thêm `rel` phù hợp nếu thực sự mở tab mới;
- không dùng unsafe HTML;
- JSON-LD phải serialize an toàn;
- không expose environment secret;
- không tạo `.env` nếu chưa cần.

---

# 18. Performance

Bảo đảm:

- không thêm client-side JavaScript chỉ cho metadata;
- không preload tất cả capability images;
- Hero priority vẫn hợp lý;
- OG image không được tải trong page UI nếu không cần;
- không thêm dependency;
- không tạo duplicate company data bundle không cần thiết;
- build production pass.

---

# 19. Accessibility

Kiểm tra contact integration:

- email/phone link có accessible name;
- visible focus;
- contrast;
- không dùng icon-only link nếu không có label;
- address dùng semantic text hợp lý;
- heading hierarchy không thay đổi sai;
- không làm Footer khó đọc trên mobile.

---

# 20. Deployment scope

Không thực hiện:

- Vercel setup;
- hosting configuration;
- DNS;
- GitHub Actions;
- environment variables;
- domain verification;
- production deployment.

Chỉ chuẩn bị codebase để có thể deploy sau.

Không thêm `vercel.json` nếu chưa có yêu cầu kỹ thuật cụ thể.

---

# 21. Validation

Sau khi hoàn thành, chạy:

```bash
npm run lint
npm run typecheck
npm run build
git status --short
git diff --stat
```

Nếu có thể, kiểm tra output production cho:

```text
/vi
/en
/robots.txt
/sitemap.xml
```

Fix toàn bộ lỗi do task này gây ra.

Không commit hoặc push.

---

# 22. Scope control

Không được:

- redesign homepage;
- thay Hero;
- thay capability images;
- chỉnh approved source assets;
- tạo page mới;
- tạo contact form;
- thêm CMS;
- thêm analytics;
- thêm deployment config;
- thêm fake contact data;
- thêm tax code;
- thêm social profiles;
- thêm certification;
- thêm dependency không cần thiết;
- commit hoặc push.

---

# 23. Final response

Báo cáo ngắn gọn:

1. files đã tạo hoặc chỉnh sửa;
2. company data source đã tạo;
3. Contact CTA đã tích hợp email/phone như thế nào;
4. Footer đã tích hợp thông tin gì;
5. metadata VI/EN;
6. canonical và alternates;
7. robots và sitemap;
8. Open Graph/Twitter metadata;
9. favicon/icon status;
10. JSON-LD có được thêm hay không;
11. routing và 404 QA;
12. kết quả lint, typecheck và build;
13. trạng thái `git status --short`;
14. những việc còn lại trước deployment.

Không tuyên bố hoàn thành nếu lint, typecheck hoặc build chưa pass.

Không commit hoặc push.
